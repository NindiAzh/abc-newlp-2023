export default function Button({ children }: { children?: string }) {
  return (
    <a className="rounded-[10px] text-white bg-[#1DC0AD] text-[14px] px-[30px] py-[14px]">
      {children}
    </a>
  )
}
