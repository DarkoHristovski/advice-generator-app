const url: string = "https://api.adviceslip.com/advice";

export const fetchAdvice = async () => {
  const fetchApi = await fetch(url).then((res) => res.json());

  return fetchApi;
};
