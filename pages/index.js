import dynamic from 'next/dynamic';
const VaraEventsSite = dynamic(() => import('@/components/VaraEventsSite'), { ssr: false });
export default function Home(){ return <VaraEventsSite/> }
