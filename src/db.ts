import { DBSchema, openDB } from "idb";

export type FileDB = {
  name: string;
  blob: Blob;
  size: number;
  type: string;
  uploader: string;
}

type MyDB = DBSchema & {
  userId: {
    key: number;
    value: string;
  };
  friendsId: {
    key: number;
    value: string;
  },
  files: {
    value: FileDB;
    key: number;
  };
}

export const db = openDB<MyDB>('db3', 1, {
  upgrade(db) {
    db.createObjectStore('userId');
    db.createObjectStore('friendsId');
    db.createObjectStore('files', { autoIncrement: true });
  },
});
