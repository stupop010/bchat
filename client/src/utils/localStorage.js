export const loadState = () => {
  try {
    console.log('loading');
    const accessToken = localStorage.getItem('token');
    if (accessToken === null) return undefined;

    return {
      token: JSON.parse(accessToken),
    };
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const saveState = ({ token }) => {
  console.log('saving');
  try {
    const serializedAccessToken = JSON.stringify(token);
    localStorage.setItem('token', serializedAccessToken);
  } catch (err) {
    // ignore write errors
    console.error(err);
  }
};
