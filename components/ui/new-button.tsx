interface NewButtonProps {
    width?: string;
    height?: string;
    bgColor?: string;
    text: string;
    padding?: string;
    paddingX?: string;
    paddingY?: string;
    paddingT?: string;
    paddingB?: string;
    textSize?: string;
}

export const NewButton = ({
    width,
    height,
    bgColor = 'bg-blue-500', // Default background color
    text,
    padding,
    paddingX,
    paddingY,
    paddingT,
    paddingB,
    textSize = 'text-base', // Default text size
}: NewButtonProps) => {
    const paddingClasses = `
        ${padding ? `p-${padding}` : ''}
        ${paddingX ? `px-${paddingX}` : ''}
        ${paddingY ? `py-${paddingY}` : ''}
        ${paddingT ? `pt-${paddingT}` : ''}
        ${paddingB ? `pb-${paddingB}` : ''}
    `;

    return (
        <button
            className={`
                ${bgColor} 
                ${textSize} 
                ${paddingClasses}
                ${width ? `w-${width}` : ''}
                ${height ? `h-${height}` : ''}
            `}
        >
            {text}
        </button>
    );
};
