import os
from google.cloud import storage

def path(file, root = os.path.join(os.getcwd(),'web/data/result')):
    return os.path.join(root, file)
import datetime

credential_path = 'dayfly-318913-a4b443321e00.json'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = os.path.join(os.getcwd(), credential_path)

bucket_name = 'dayfly-bucket'

def set_bucket_public_iam(bucket_name = bucket_name):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    policy = bucket.get_iam_policy(requested_policy_version=3)
    bucket.set_iam_policy(policy)


def upload_vid(destination_blob_name):
    """returns public url from the video loaded"""
    source_file_name = '올릴 파일명'
    client = storage.Client()
    bucket = client.bucket(bucket_name)
    blob = bucket.blob('%s'%(destination_blob_name))

    blob.upload_from_filename(path('%s'%(destination_blob_name)))
    blob.make_public
    print(blob.public_url)
    return blob.public_url


# 동영상을 클라우드에서 받아오기
def get_vid(source_blob_name):
    """gets public url from the video saved"""
    # bucket_name = "your-bucket-name"
    # source_blob_name = "storage-object-name"
    # destination_file_name = "local/path/to/file"
    client = storage.Client()
    bucket = client.bucket('dayfly-bucket')
    blob = bucket.blob('%s'%(source_blob_name))

    return blob.public_url



    

       
        


