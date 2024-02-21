"use client";
import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Description.module.sass";

const PLACEHOLDERIMAGE =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAC+AL4DASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EABkQAQEBAQEBAAAAAAAAAAAAAAABAhEDEv/EABgBAQEBAQEAAAAAAAAAAAAAAAIBAwAE/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A+Ec3juNY4Lm2O4cGsbHOawKKDgIOEIsm5LzDcwK6DyZkGYbmMujjYOMkFIypxzuC47jMg0NHYGxY4ul03UL015GlaBozRem3IUFYKhaiVx3B8dx5I9GA4zg+MODYHjY13GsZ2Og8sgpCHB5huYXmHZg1wsw3MDmG5jPoo3MHI7MMkY0gcdwyRvyBaTYCw+5DrKx2p9QvUP1CtRpylI0Xo7UK02gUuhHQnBdx3B8Zx5JXqwFgeGWMsOUbAccLjuNZQsZIPLJB5hhYPMNxAYh2YlQzENzA4h2YzquzkyZFnJkyzql/Lfk2Zd8gukXINRTcl6y6O1LqE7ircJ3DjkuoVqH7hOmsQrQB6AcQ7jOGcZY8ceouwNhlgaco4CxnBOayjY6QeYGQzMMLB4h+IXiH4jqBnnD8ZB5w/ECoLOTM5bmGZyFcGZd8mzLuBV0i5L1FOslby5yXcI3Fe4n9IUVJ6Qjan0ifZxxGgUegcPXKuMsGGvHHqBQWGUNaRAcY2sjXlLGwzIIZk4zsNxFHnCcKMRQp2IoxCcKcQKJmYbmBzDcwaLpHWDkdwK4rUK3FGoVuI5LuJvSK/SJvRYUSekTbVeiXZxSNl0zZZaq0NayvK9IKGiodHHArnVjWIKGZLhmTgU/zU+abCnzUKp81GE/mowNZ1Rg3JWDsjRFI7jY4UBonZ+idoqf0S+ir0S+rliT0Tein0TehQon2XTNl1SV9ZazrLXnb6yh060FpxXM6y13WkcOGYpMpma0g1T5qfOpcVR51zOq/NT5pPOqfOoFU4p2aRim5o0KbK7oZXdFHaJ2Zqk7qITtN61R6VL61xRN61L6KPSpvSkRGi6PVLqqo6y0HWWscbaK0FrLQ2lF1trOhtd1pFMlMzSJTc0kqnFU+dR+dUedcNWedU+dR+dUY0NCxXinZqXGjc6QLFErrSppv0It1St1utFbrkBupvWm7qf0quI9Kl9Kf6VN6VYRWy7RaoKSi+mXRf0y6Z4ejug2hug2rIUouulB13ShSmymZpEpmaRKsVRjSPFPxpEq3FUY0ixo/GhtCxZnRudJM6NzodCxTNO+iZp30g2Ga0XrQbovWnDjN1P6Ue9Eb0UQr0qfdM3SN0opeqAWqAnaT9O+ivp30OJOjLoN0D6Z1caSmddKX1sqtJTZTM0jNMzXNIpxT8aSYp2NDVWY0fjSPGjsaC0bFedG50kzoyaHQsUzTvoiab9OCw26L1oF0DWlGxu9Eb03Wit6KDQbpG6Zuk6pwQaoa2h6eJqL6Z9F/TuuwJ0Z9O6X1vXY05o+tlLlFKjfmmyjzSc0yUa2h+adip803NGkpzTs6S5puaFdinOjJpPmjmg0LD5pv0T9O+nBYZdBugWhtKM67Wi9VuqVqtIFZqlaotUrVaQKy0PXVhDrzeu6DrVYyi60MbEbcilFKAcSvRyPI8lwcCt+Ts03NJyZkK0h2abmk5NyzrjZRylQcEaZ13QtcFbaHVdQ6OMqzVLtFQVpGdBql0egVpGdDQtrDgv/Z";

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => setHasBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  })

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDERIMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          ducimus perspiciatis esse expedita assumenda saepe? Inventore quia,
          aperiam nam fugit consectetur molestias similique in, amet veritatis
          alias ipsam, illo dignissimos!
        </p>
      </div>
    </section>
  );
};
