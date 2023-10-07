const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProject: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDB: String(import.meta.env.VITE_APPWRITE_DB_ID),
    appwriteColl: String(import.meta.env.VITE_APPWRITE_COLL_ID),
    appwriteBucket: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf