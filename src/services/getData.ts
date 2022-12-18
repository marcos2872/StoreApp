import firestore from '@react-native-firebase/firestore';
import storage, { FirebaseStorageTypes } from '@react-native-firebase/storage';

const getData = async () => {
  const data: any = [];
  const snapshot = await firestore().collection('vehicles').get();
    snapshot.forEach(doc => {
      data.push({id: doc.id, ...doc.data()});
    })

  const allVehicles = await Promise.all(data.map(async (curr: any) => {
    const list = await storage().ref(`${curr.description.Model}vehicles,${curr.id}`).list();
    const urls = await Promise.all(list.items.map(async (ref: { fullPath: any; }) => {
          const url = await storage().ref(ref.fullPath).getDownloadURL();
            return url;
          }));
        return {...curr, images: urls}
      }))
      return allVehicles;
}

export default getData;