export const loadState = () => {
  try {
    console.log(localStorage);
    const accessToken = localStorage.getItem('access_token');
    const refeshToken = localStorage.getItem('refesh_token');
    if (accessToken === null || refeshToken === null) {
      return undefined;
    }
    return JSON.parse(accessToken, refeshToken);
  } catch (err) {
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
