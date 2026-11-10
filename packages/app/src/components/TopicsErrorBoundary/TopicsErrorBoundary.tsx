import { Component, type ErrorInfo, type ReactNode } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';

type ErrorBoundaryProps = {
  onReset: () => void;
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Failed to load topics', error, info.componentStack);
  }

  handleRetry = () => {
    // Clear the query's error so it refetches, then re-render the children
    this.props.onReset();
    this.setState({ error: null });
  };

  override render() {
    if (this.state.error) {
      return (
        <section className="gradient-custom min-vh-100">
          <MDBContainer className="py-5 h-100">
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol xl="10">
                <MDBCard className="mask-custom">
                  <MDBCardBody className="p-5 text-center" role="alert">
                    <h2 className="my-4">Couldn't load topics</h2>
                    <div className="text-muted mb-4">
                      {this.state.error.message}
                    </div>
                    <MDBBtn onClick={this.handleRetry}>Try again</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      );
    }

    return this.props.children;
  }
}

export default function TopicsErrorBoundary({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => <ErrorBoundary onReset={reset}>{children}</ErrorBoundary>}
    </QueryErrorResetBoundary>
  );
}
