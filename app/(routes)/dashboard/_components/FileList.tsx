"use client";
import { FileListContext } from '@/app/_context/FilesListContext';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import moment from 'moment';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button'; 

export interface FILE {
  archive: boolean;
  createdBy: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteboard: string;
  _id: string;
  _creationTime: number;
}

function FileList() {
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const [fileList, setFileList] = useState<FILE[]>([]);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    if (fileList_ !== undefined) {
      setFileList(fileList_ || []);
    }
    console.log(fileList_);
  }, [fileList_]);

  return (
    <div className='mt-10'>
      <div className="overflow-x-auto">
        {fileList.length === 0 ? (
          
          <div className=" flex flex-col items-center justify-center w-full h-full text-center  text-gray-600 p-4">No files available</div>
        ) : (
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Edited</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Author</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</td>
                 
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {fileList.map((file: FILE, index: number) => (
                <tr key={index} className="odd:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {file.fileName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(file._creationTime).format('DD MMM YYYY')}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(file._creationTime).format('DD MMM YYYY')}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user && (
                      <Image
                        src={user?.picture}
                        alt='user'
                        width={30}
                        height={30}
                        className='rounded-full'
                      />
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Button
                      className='bg-blue-600 hover:bg-blue-700 text-white'
                      onClick={() => router.push('/workspace/' + file._id)}
                    >
                      Open
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default FileList;
