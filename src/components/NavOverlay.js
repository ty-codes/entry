import styled from "styled-components";
// import { CloseIcon } from "../images/svg";


export default function NavOverlay ({ isOpenOverlay, setIsOpenOverlay }) {
	

	return (
		<Overlay isOpenOverlay={isOpenOverlay}>
			<div className="flex-justify-between flex-align-center">
				<Wrapper>
					
				</Wrapper>
				<Close className="ml-2" onClick={() => setIsOpenOverlay(false)}>
					{/* <CloseIcon /> */}close
				</Close>
			</div>
			
		</Overlay>
	);
};


const Overlay = styled.div`
	--blur: 20px;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 40px 20px;
	background-color: rgba(0, 0, 0, 0.95);
	-webkit-backdrop-filter: blur(var(--blur));
	backdrop-filter: blur(var(--blur));
	z-index: 99999;
	transform: translateX(${(props) => (props.isOpenOverlay ? 0 : "100%")});
	transition: transform 0.5s ease;
	overflow-y: scroll;

	.albums {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
`;

const Close = styled.a`
	svg {
		width: 30px;
		aspect-ratio: 1;
	}

	&:hover {
		cursor: pointer;

		path {
			stroke: ${(props) => props.theme.primaryColor};
		}
	}
`;

const Wrapper = styled.div`
	--horizontal-padding: 20px;
	--verical-padding: 9px;

	display: flex;
	align-items: center;
	padding: var(--verical-padding) var(--horizontal-padding);
	border-radius: 20px;
	width: 100%;
	height: 3.6rem;
	position: relative;
	background: #2B2B2B;
	overflow-y: visible;

	
`;


