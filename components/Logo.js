import Image from "next/image"

const Logo = ({ img_1, gradient, tw, heightWidth }) => {
  return (
    <div className={tw}>
      {heightWidth ? (
        <Image
          className="rounded-full object-cover"
          src={img_1}
          height={220}
          width={200}
        />
      ) : (
        <Image
          className="rounded-full object-cover"
          src={img_1}
          layout="fill"
        />
      )}
      <Image
        className="rounded-full object-cover"
        src={gradient}
        layout="fill"
      />
    </div>
  )
}

export default Logo