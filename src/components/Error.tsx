/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import { useEffect } from 'react';

type Props = {
  clearErrorMessage: () => void,
  hasLoadingError: boolean,
  errorMessage: string,
};

export const Error: React.FC<Props> = (
  { clearErrorMessage, hasLoadingError, errorMessage },
) => {
  useEffect(() => {
    setTimeout(() => clearErrorMessage(), 3000);
  });

  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification', 'is-danger', 'is-light', 'has-text-weight-normal', {
          hidden: !hasLoadingError,
        },
      )}
    >
      <div>
        <span>{errorMessage}</span>
      </div>
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={clearErrorMessage}
      />
    </div>
  );
};
