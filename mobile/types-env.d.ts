type Children = {
  children: React.ReactNode;
};

type HTTPResponse = {
  status: boolean;
  message: string;
  data: ThemeResponse | UserResponse | CategoryProps | CategoryProps[];
};

type HTTPResponseWithToken = {
  status: boolean;
  message: string;
  data: UserResponse | any;
  accessToken: string;
};

type UserResponse = {
  username: string;
  picture: string;
  email: string;
  createdAt: string;
  lastLoginAt: string;
};

type ThemeResponse = {
  color: string;
  theme: string;
};

type CategoryProps = {
  id: string;
  name: string;
  icon: string;
};
