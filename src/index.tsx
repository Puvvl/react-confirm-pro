/* eslint-disable react-hooks/exhaustive-deps */
import "animate.css";
import classNames from "classnames";
import React, { useEffect, useState } from 'react';
import { ReactConfirmProProps } from "react-confirm-pro";
import { render } from 'react-dom';
import { CloseIcon } from "./CloseIcon";
import "./react-confirm-pro.scss";

const Modal = ({
  duration = .4,
  delay = .2,
  animate = {
    in: "animate__fadeIn",
    out: "animate__fadeOut"
  },
  className,
  onClickOutside,
  closeOnClickOutside = true,
  keyboardEvents = {
    escape: true,
    submit: false
  },
  customUI,
  children,
  buttons,
  title,
  description,
  onSubmit,
  onCancel,
  closeButton,
  type = "light",
  btnCancel = "Cancel",
  btnSubmit = "Submit",
}: ReactConfirmProProps) => {
  const [visible, setVisible] = useState(true);

  const onClose = () => {
    const portal = document.getElementById("react-confirm-pro") as HTMLDivElement;
    setVisible(false);
    setTimeout(() => {
      portal.remove();
    }, duration*1000);
  };

  const handleClickOutside = () => {
    if (closeOnClickOutside) {
      onClose();
      if (onClickOutside) {
        onClickOutside();
      }
    }
  };

  const onCloseOnEscape = (event: KeyboardEvent) => {
    if (keyboardEvents.escape) {
      if(event.code === "Escape" || event.keyCode === 27) {
        onClose();
      }
    }
    if (keyboardEvents.submit) {
      if(event.code === "Enter" || event.keyCode === 13) {
        handleConfirm();
      }
    }
  };

  const handleConfirm = () => {
    if (onSubmit) {
      onSubmit();
    }
    onClose();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    onClose();
  }

  useEffect(() => {
    const isSupported = document && document.addEventListener;
    if (!isSupported || (!keyboardEvents.submit && !keyboardEvents.escape)) return;
    document.addEventListener("keydown", onCloseOnEscape, false);
    if (!visible) return document.removeEventListener("keydown", onCloseOnEscape, false);
    return () => {
      document.removeEventListener("keydown", onCloseOnEscape, false);
    };
  }, [visible])

  const checkedType = type !== "light" ? type !== "dark" ? "light" : type : type;

  const containerClassName = classNames("react-confirm-pro", `react-confirm-pro__${checkedType}`, className)

  const animateClassName = classNames({
    [`${animate.in}`]: visible,
    [`${animate.out}`]: !visible
  });

  const styles = {
    animationDuration: `${duration}s`
  };

  const bodyStyles = {
    animationDelay: visible ? `${delay}s` : "0s"
  }

  return (
    <div className={containerClassName}>
      <div
        onClick={handleClickOutside}
        className={`react-confirm-pro__overlay ${animateClassName}`}
        style={styles}
      />
      {customUI && React.cloneElement((
        <div
          className={`react-confirm-pro__body-custom ${animateClassName}`}
          style={{ ...styles, ...bodyStyles }}
        >
          {customUI({
            onClose,
            onSubmit: handleConfirm,
            onCancel: handleCancel,
          })}
        </div>
      ))}
      {!customUI && (
        <div
          className={`react-confirm-pro__body ${animateClassName}`}
          style={{ ...styles, ...bodyStyles }}
        >
          {closeButton || (
            <button
              className="react-confirm-pro__btn react-confirm-pro__btn-close"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          )}
          {children || (
            <div>
              {title}
              {description}
              {(buttons && buttons({
                onCancel: handleCancel,
                onSubmit: handleConfirm,
              })) || (
                <div
                  className="react-confirm-pro__actions"
                  style={{ marginTop: !title && !description ? "30px" : 0 }}
                >
                  <button
                    className="react-confirm-pro__btn react-confirm-pro__btn-confirm"
                    onClick={handleCancel}
                  >
                    {btnCancel}
                  </button>
                  <button
                    className="react-confirm-pro__btn react-confirm-pro__btn-alert"
                    onClick={handleConfirm}
                  >
                    {btnSubmit}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export const onConfirm = (options: ReactConfirmProProps) => {
  if (document.getElementById("react-confirm-pro")) return;
  const portal = document.createElement("div");
  portal.id = "react-confirm-pro";
  document.body.appendChild(portal);

  return render(
    <Modal {...options} />,
    portal
  );
};

