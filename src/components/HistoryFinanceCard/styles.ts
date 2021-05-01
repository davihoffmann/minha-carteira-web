import styled from 'styled-components';

interface IContainerProps {
    cardColor: string;
}

interface ITagProps {
    tagColor: string;
}

export const Container = styled.div<IContainerProps>``;

export const Tag = styled.div<ITagProps>``;
