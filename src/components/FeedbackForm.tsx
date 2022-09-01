import React, { useState } from "react";
import { FeedbackTypes, StoreType } from "../store/types";
import { addFeedback } from "../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface Props {
  close: () => void;
}

// TODO: Add Error Messages to the Form
// interface ErrorType {
//   title?: string;
//   tags?: string;
//   description?: string;
// }

const FeedbackForm: React.FC<Props> = ({ close }) => {
  // const [error, setError] = useState<ErrorType>({});
  // const error = useRef<ErrorType>({});
  const feedbacks = useSelector((state: StoreType) => state.feedbacks);
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState<FeedbackTypes>({
    title: "",
    tag: "",
    upVotes: 0,
    numberOfComments: 0,
    description: "",
  });

  // const errorMessage = (feedback: any) => {
  //   if (feedback.title === "")
  //     error.current.title = "Title field can not be empty";
  //   if (feedback.tag === "") error.current.tags = "Choose a tag";
  //   if (feedback.tag === "")
  //     error.current.description = "Description field can not be empty";
  // };

  const onSubmit = (e: any) => {
    e.preventDefault();

    dispatch(
      addFeedback({ id: `number ${feedbacks.length + 1}`, ...feedback })
    );
    setFeedback({
      title: "",
      tag: "",
      upVotes: 0,
      numberOfComments: 0,
      description: "",
    });
    close();
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
              value={feedback.title}
              name="title"
              onChange={(e) =>
                setFeedback({ ...feedback, title: e.target.value })
              }
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
              value={feedback.tag}
              name="tag"
              onChange={(e) =>
                setFeedback({ ...feedback, tag: e.target.value })
              }
            >
              <option value="">Choose tag</option>
              <option value="ui">UI</option>
              <option value="ux">UX</option>
              <option value="feature">Feature</option>
              <option value="enhancement">Enhancement</option>
              <option value="bug">Bug</option>
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
              value={feedback.description}
              onChange={(e) =>
                setFeedback({ ...feedback, description: e.target.value })
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
            Add Feedback
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
