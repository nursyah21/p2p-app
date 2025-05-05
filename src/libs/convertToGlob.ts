// async function storePngAsBlobFromFile(file: File, db: IDBDatabase, storeName: string, productCode: string) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();

//         reader.onload = async (event: any) => {
//             const blob = new Blob([event.target.result], { type: file.type });

//             // Now you have a Blob, you can store it in IndexedDB
//             const transaction = db.transaction(storeName, 'readwrite');
//             const store = transaction.objectStore(storeName);

//             const data = {
//                 name: file.name,
//                 data: blob,
//                 productCode: productCode
//             };

//             const request = store.add(data);

//             request.onsuccess = () => {
//                 console.log('Data added to the store!');
//                 resolve(true);
//             };

//             request.onerror = (event: any) => {
//                 console.error('Error adding data to the store', event.target.error);
//                 reject(event.target.error);
//             };
//         };

//         reader.onerror = (event: any) => {
//             console.error("Error reading file:", event.target.error);
//             reject(event.target.error);
//         };

//         reader.readAsArrayBuffer(file);
//     });
// }

// // Example usage:
// // Assuming you have a database instance 'db' and a file from an input element
// // const fileInput = document.getElementById('fileInput') as HTMLInputElement;
// // fileInput.addEventListener('change', (event: Event) => {
// //   const file = (event.target as HTMLInputElement).files[0];
// //   storePngAsBlobFromFile(file, db, 'files', 'PRODUCT123');
// // });