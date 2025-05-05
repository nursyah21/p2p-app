import { DBSchema, openDB } from "idb";

export type FileDB = {
  name: string;
  blob: Blob;
  size: number;
  type: string;
  uploader: string;
  id: string;
}

type MyDB = DBSchema & {
  users: {
    key: string;
    value: string;
  };
  files: {
    value: FileDB;
    key: string;
  };
}

export const db = openDB<MyDB>('db', 1, {
  upgrade(db) {
    db.createObjectStore('users');
    db.createObjectStore('files');
  },
});
