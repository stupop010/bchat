export const loadState = () => {
  try {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (accessToken === null || refreshToken === null) {
      return undefined;
    }
    return {
      accessToken: JSON.parse(accessToken),
      refreshToken: JSON.parse(refreshToken),
    };
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = ({ accessToken, refreshToken }) => {
  try {
    const serializedAccessToken = JSON.stringify(accessToken);
    const serializedRefreshToken = JSON.stringify(refreshToken);
    localStorage.setItem('access_token', serializedAccessToken);
    localStorage.setItem('refresh_token', serializedRefreshToken);
  } catch (err) {
    // ignore write errors
    console.log(err);
  }
};
