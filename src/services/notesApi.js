export const createNote = note => {
  return Promise.resolve({
    _id: '23420964',
    ...note
  });
};
