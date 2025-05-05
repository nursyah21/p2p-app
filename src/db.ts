import { DBSchema, openDB } from "idb";

interface MyDB extends DBSchema {
  user: {
    key: number;
    value: string;
  };
  files: {
    value: {
      name: string;
      data: Blob;
      size: number;
      type: string;
    };
    key: number;
  };
}

export const db = await openDB<MyDB>('my-db', 1, {
  upgrade(db) {
    db.createObjectStore('user');
    db.createObjectStore('files');
  },
});
