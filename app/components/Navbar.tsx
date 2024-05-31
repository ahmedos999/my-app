import Link from 'next/link';

export default function Navbar(){
return (
    <div className="flex m-2 justify-center font-bold text-lg bg-gray-900 text-slate-200">
        <Link href={'/'} className='mr-8'><h2>Home</h2></Link>
        <Link href={'/home'}><h2>Cube</h2></Link>
    </div>
)
}