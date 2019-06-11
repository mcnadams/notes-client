import { newNote } from './notesActions';

jest.mock('../services/notesApi.js', () => ({
  createNote() {
    return Promise.resolve([]);
  }
}));

describe('notes actions', () => {
  it('creates an action to create a note', () => {
    const noteAction = newNote({
      title: 'first note',
      body: 'do your homework and get a job'
    });

    expect(noteAction).toEqual({
      type: 'NEW_NOTE',
      pendingType: 'NEW_NOTE_PENDING',
      fulfilledType: 'NEW_NOTE_FULFILLED',
      rejectedType: 'NEW_NOTE_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
