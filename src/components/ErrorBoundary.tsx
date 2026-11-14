import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0E131F] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md p-6 rounded-2xl border border-red-500/40 bg-red-500/10 backdrop-blur-md">
            <span className="inline-block rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-[#FF444F] uppercase tracking-wider">
              Rendering Notice
            </span>
            <h2 className="mt-3 font-heading text-xl font-bold text-white">
              Something went wrong loading this section
            </h2>
            <p className="mt-2 text-xs text-slate-300 font-mono bg-black/50 p-2 rounded text-left overflow-auto max-h-32">
              {this.state.error?.message || 'Unknown render error'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-xl bg-[#FF444F] px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-[#E63540]"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
