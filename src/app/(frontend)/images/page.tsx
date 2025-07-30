import configPromise from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'

export default async function ImagesPage() {
  const payload = await getPayload({ config: configPromise })
  const paginatedImages = await payload.find({
    collection: 'media',
    limit: 1000,
  })
  const images = paginatedImages.docs

  return (
    <div style={{ width: '100%', display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '4rem' }}>
      {images.map((image) => (
        <div key={image.id} style={{ flex: '0 1 calc(33.333% - 1rem)', boxSizing: 'border-box' }}>
          <Image src={image.url ?? ''} alt={image.alt} width={400} height={400} />
        </div>
      ))}
    </div>
  )
}
