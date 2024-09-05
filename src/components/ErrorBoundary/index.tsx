import { Component, ErrorInfo, ReactNode } from 'react';
import styles from './style.module.css';

type PropsType = {
  children?: ReactNode;
};

type StateType = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

export class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: Readonly<PropsType>) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(): StateType {
    return { hasError: true, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorWrapper}>
          <p>Something went wrong</p>
          <p>Try to reload page or come back later</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
