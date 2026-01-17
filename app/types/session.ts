export interface Session {
  start: string;
  end: string;
  title: string;
}

export interface FormattedSession {
  date: string;
  time: string;
  title: string;
}

export interface SessionsResponse {
  sessions: {
    upcoming: Session[];
    previous: Session[];
  };
}
