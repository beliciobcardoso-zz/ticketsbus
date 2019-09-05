# valetransporte
Aplicativo para controla seu cartão de vale transporte.

Para tornar seu banco de dados privado, basta negar todas as leituras e gravações

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}