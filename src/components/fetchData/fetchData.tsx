// import { memo, useState } from "react";
// import { Pagination } from "../pagination";
// import { StyledFetchDataContainer } from "./fetchData.styled";
// import { UserDetails } from "../dataDetails/usersDetails";
// import { ResourcesDetails } from "../dataDetails/resourcesDetails";
// import { useLocation, useNavigate } from "react-router-dom";
// import useGetRequest from "../../hooks/useGetRequest";
// import { Loader } from "../SVG-loader";
// interface UserData {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// }

// interface ResourcesData {
//   id: number;
//   name: string;
//   year: string;
//   color: string;
//   pantone_value: string;
// }

// interface UserDataResponse {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: UserData[];
// }

// interface ResourcesDataResponse {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: ResourcesData[];
// }

// export const FetchData: React.FC = memo(() => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const pathName = location.pathname.slice(1);
//   const { data, loading } = useGetRequest<
//     UserDataResponse | ResourcesDataResponse
//   >(`https://reqres.in/api/${pathName}?page=${currentPage}&per_page=10`);

//   const users = data?.data;
//   const resources = data?.data;

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   const navigateDetails = (id: number) => {
//     navigate(`/${pathName}/${id}`);
//   };
//   const totalPages: number = data ? data.total_pages : 1;
//   if (loading || !data) return <Loader />;
//   return (
//     <StyledFetchDataContainer>
//       {pathName == "users" ? (
//         <UserDetails onClick={navigateDetails} users={users} />
//       ) : (
//         <ResourcesDetails onClick={navigateDetails} resources={resources} />
//       )}
//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         onPageChange={handlePageChange}
//       />
//     </StyledFetchDataContainer>
//   );
// });

import { memo, useState } from "react";
import { Pagination } from "../pagination";
import { StyledFetchDataContainer } from "./fetchData.styled";
import { UserDetails } from "../dataDetails/usersDetails";
import { ResourcesDetails } from "../dataDetails/resourcesDetails";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../SVG-loader";
import { useQuery } from "react-query";

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ResourcesData {
  id: number;
  name: string;
  year: string;
  color: string;
  pantone_value: string;
}

interface UserDataResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
}

interface ResourcesDataResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ResourcesData[];
}

export const FetchData: React.FC = memo(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  const { data, isLoading } = useQuery<
    UserDataResponse | ResourcesDataResponse
  >(
    ["data", pathName, currentPage],
    async () => {
      const response = await fetch(
        `https://reqres.in/api/${pathName}?page=${currentPage}&per_page=10`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    {
      staleTime: 600000,
    }
  );

  const users = (data as UserDataResponse)?.data;
  const resources = (data as ResourcesDataResponse)?.data;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const navigateDetails = (id: number) => {
    navigate(`/${pathName}/${id}`);
  };

  const totalPages: number = data ? data.total_pages : 1;
  if (isLoading || !data) return <Loader />;

  return (
    <StyledFetchDataContainer>
      {pathName === "users" ? (
        <UserDetails onClick={navigateDetails} users={users} />
      ) : (
        <ResourcesDetails onClick={navigateDetails} resources={resources} />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </StyledFetchDataContainer>
  );
});
