import { StyledPagination } from "./pagination.styled";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const goToPage = (pageNumber: number) => {
    onPageChange(pageNumber);
  };
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          onClick={() => goToPage(i)}
          style={{
            cursor: "pointer",
            color: currentPage === i ? "#473aa6" : "black",
            fontWeight: currentPage === i ? "bold" : "normal",
          }}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return <StyledPagination>{renderPagination()}</StyledPagination>;
};
