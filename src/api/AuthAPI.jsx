import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export const LoginApi = (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password)
    }
    catch (err) {
        console.log(err)
    }
}