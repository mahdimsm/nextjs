import Link from "next/link";

const UserLogin = () => {
    return  (
        <div>
          <Link
            href='/login'
            className='rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800'
          >
            ورود / ثبت نام
          </Link>
        </div>
      );
}
 
export default UserLogin;