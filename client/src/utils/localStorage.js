export const loadState = () => {
  try {
    const accessToken = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken === null || refreshToken === null) {
      return undefined;
    }

    return {
      token: JSON.parse(accessToken),
      refreshToken: JSON.parse(refreshToken),
    };
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = ({ token, refreshToken }) => {
  try {
    const serializedAccessToken = JSON.stringify(token);
    const serializedRefreshToken = JSON.stringify(refreshToken);
    localStorage.setItem('token', serializedAccessToken);
    localStorage.setItem('refreshToken', serializedRefreshToken);
  } catch (err) {
    // ignore write errors
    console.log(err);
  }
};
