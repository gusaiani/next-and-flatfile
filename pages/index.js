import {FlatfileButton} from '@flatfile/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <FlatfileButton
          licenseKey="82110e30-78c2-11e9-b577-23c2904d0f8b"
          customer={{userId: '12345'}}
          settings={{
            type: 'Contact',
            fields: [
              {label: 'Full Name', key: 'name'},
              {label: 'Email', key: 'email'},
            ],
          }}
          onData={async (results) => {
            // do something with the results
            console.log({results})
            return 'Done!'
          }}
        >
          Import Contacts
        </FlatfileButton>
      </main>
    </div>
  )
}
