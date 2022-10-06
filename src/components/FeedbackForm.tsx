import React, { useEffect, useState } from "react";
import { FeedbackTypes, StoreType } from "../store/types";
import { addFeedback, editFeedback } from "../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface Props {
  close: () => void;
  edit: boolean;
  feedback?: FeedbackTypes | null;
}

// TODO: Add Error Messages to the Form
// interface ErrorType {
//   title?: string;
//   tags?: string;
//   description?: string;
// }

const FeedbackForm: React.FC<Props> = ({ close, edit, feedback }) => {
  // const [error, setError] = useState<ErrorType>({});
  // const error = useRef<ErrorType>({});
  const feedbackObj = Object.keys(
    useSelector((state: StoreType) => state.feedbacks)
  );
  const dispatch = useDispatch();
  const [feed, setFeed] = useState<FeedbackTypes>({
    title: "",
    tag: "",
    upVotes: 0,
    numberOfComments: 0,
    status: "Planned",
    description: "",
  });

  useEffect(() => {
    if (edit) setFeed(feedback as FeedbackTypes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const reset = () => {
    setFeed({
      title: "",
      tag: "",
      upVotes: 0,
      numberOfComments: 0,
      status: "Planned",
      description: "",
    });
  };
  const addToFeedback = () => {
    dispatch(addFeedback({ id: `number ${feedbackObj.length + 1}`, ...feed }));
    reset();
    close();
  };
  const updateFeedback = () => {
    dispatch(editFeedback(feed));
    close();
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (edit) {
      updateFeedback();
    } else {
      addToFeedback();
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-gray-700 dark:text-gray-50 text-lg font-semibold">
            Email
          </label>
          <div className="border border-gray-600 dark:border-gray-50 rounded-lg p-4">
            <input
              placeholder="Enter feedback title"
              type="text"
              className="w-full dark:bg-gray-900 text-gray-600 dark:text-gray-50 focus:outline-0"
              value={feed.title}
              name="title"
              onChange={(e) => setFeed({ ...feed, title: e.target.value })}
            />
          </div>
          <p className="text-sm text-red-500">
            {/* {error.current.title && error.current.title} */}
          </p>
        </div>
        <div className="space-y-2">
          <label className="text-gray-700 dark:text-gray-50 text-lg font-semibold">
            Tags
          </label>
          <div className="border border-gray-600 dark:border-gray-50 rounded-lg p-4">
            <select
              placeholder="Pick a tag"
              className="w-full dark:bg-gray-900 text-gray-600 dark:text-gray-50 focus:outline-0"
              value={feed.tag}
              name="tag"
              onChange={(e) => setFeed({ ...feed, tag: e.target.value })}
            >
              <option value="">Choose tag</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Feature">Feature</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </div>
          <p className="text-sm text-red-500">
            {/* {error.current.tags && error.current.tags} */}
          </p>
        </div>
        <div className="space-y-2">
          <label className="text-gray-700 dark:text-gray-50 text-lg font-semibold">
            Status
          </label>
          <div className="border border-gray-600 dark:border-gray-50 rounded-lg p-4">
            <select
              placeholder="Pick a tag"
              className="w-full dark:bg-gray-900 text-gray-600 dark:text-gray-50 focus:outline-0"
              value={feed.status}
              name="status"
              onChange={(e) =>
                setFeed({
                  ...feed,
                  status: e.target.value as "Planned" | "Live" | "In-Progress",
                })
              }
            >
              <option value="">Choose tag</option>
              <option value="Planned">Planned</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Live">Live</option>
            </select>
          </div>
          <p className="text-sm text-red-500">
            {/* {error.current.tags && error.current.tags} */}
          </p>
        </div>
        <div className="space-y-2">
          <label className="text-gray-700 dark:text-gray-50 text-lg font-semibold">
            Description
          </label>
          <div className="border border-gray-600 dark:border-gray-50 rounded-lg p-4">
            <textarea
              placeholder="Enter feedback description"
              rows={4}
              name="description"
              className="w-full dark:bg-gray-900 text-gray-600 dark:text-gray-50 focus:outline-0"
              value={feed.description}
              onChange={(e) =>
                setFeed({ ...feed, description: e.target.value })
              }
            />
          </div>
          <p className="text-sm text-red-500">
            {/* {error.current.description && error.current.description} */}
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <button
            className="flex items-center py-3 px-4 bg-purple-600 text-white rounded-lg font-semibold"
            onClick={onSubmit}
          >
            {edit ? "Edit Feedback" : "Add Feedback"}
          </button>
          <button
            className="flex items-center py-3 px-4 bg-purple-600 text-white rounded-lg font-semibold"
            onClick={close}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
