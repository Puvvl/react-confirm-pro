declare module 'react-confirm-pro' {
  export type ReactConfirmProCustomUIOptions = {
    onClose?: () => void;
    onCancel: () => void;
    onSubmit: () => void;
  }
  export interface ReactConfirmProProps {
    duration?: number;
    delay?: number;
    animate?: {
      in?: string;
      out?: string;
    };
    className?: string;
    onClickOutside?: () => void;
    closeOnClickOutside?: boolean;
    keyboardEvents?: {
      escape?: boolean;
      submit?: boolean;
    };
    customUI?: (options: ReactConfirmProCustomUIOptions) => React.ReactNode;
    children?: React.ReactNode[];
    buttons?: (options: ReactConfirmProCustomUIOptions) => React.ReactNode[];
    title?: string|React.ReactNode;
    description?: string|React.ReactNode;
    onSubmit?: () => void;
    onCancel?: () => void;
    closeButton?: React.ReactNode;
    type?: "dark"|"light";
    btnCancel?: string;
    btnSubmit?: string;
  };

  export function onConfirm(options: ReactConfirmProProps): void;

  export default class ReactConfirmPro extends React.Component<ReactConfirmProProps> {};
}