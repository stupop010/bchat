export const loadState = () => {
  try {
    const accessToken = localStorage.getItem('token');
    if (accessToken === null)
      return {
        token: null,
        isAuth: false,
        error: '',
      };

    return {
      token: JSON.parse(accessToken),
      isAuth: false,
      error: '',
    };
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const saveState = ({ token }) => {
  try {
    const serializedAccessToken = JSON.stringify(token);
    localStorage.setItem('token', serializedAccessToken);
  } catch (err) {
    // ignore write errors
    console.error(err);
  }
};
