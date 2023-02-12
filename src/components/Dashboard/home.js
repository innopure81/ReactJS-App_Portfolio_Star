import { useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

const Home = () => {
    const form = useRef();
    const submitPortfolio = (e)=>{
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];
        console.log(name,description,url,image);
        /* To find a location for image*/
        const storageRef = ref(storage, `portfolio/${image.name}`);
        /* uploadBytes(): upload an image file, then save the data array */
        uploadBytes(storageRef, image).then(
            (snapshot)=>{
                getDownloadURL(snapshot.ref).then(  (downloadUrl)=>{
                    savePortfolio({name,description,url,image:downloadUrl})
                },  (error)=>{console.log(error); savePortfolio({name,description,url,image:null})}  )
            },  (error)=>{console.log(error); savePortfolio({name,description,url,image:null})}
        );

    }
    /* To save a new data array */
    const savePortfolio = async (portfolio)=>{
        console.log(portfolio);
        try {
            await addDoc(collection(db,'portfolio'), portfolio); //addDoc(): to add a new array to DB collection
            window.location.reload(false);
        } catch (error) {
            console.log(error);
            alert('Failed to add your portfolio to dashboard DB.');
        }
    };

    return (
        <div className="dashboard">

            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="Url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </form>
        </div>
    )
}

export default Home;
