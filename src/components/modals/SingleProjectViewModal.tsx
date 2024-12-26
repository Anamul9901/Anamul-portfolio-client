'use client'
import AHModal from "./AHModal";

const SingleProjectViewModal = () => {


  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <AHModal
        title="Add Blog"
        buttonText="Add Blog"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <div>single project details</div>
      </AHModal>
    </div>
  );
};

export default SingleProjectViewModal;
