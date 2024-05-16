import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'blue', fontSize: '2rem', left: '10px', zIndex: 1 }}
            onClick={onClick}
        >
            <FaChevronLeft />
        </div>
    );
};

export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'blue', fontSize: '2rem', right: '10px', zIndex: 1 }}
            onClick={onClick}
        >
            <FaChevronRight />
        </div>
    );
};
