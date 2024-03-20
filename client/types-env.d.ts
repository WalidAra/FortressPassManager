type Children = {
  children: React.ReactNode;
};

type HTTPResponse = {
  status: boolean;
  message: string;
  data: any;
  accessToken?: string;
};
