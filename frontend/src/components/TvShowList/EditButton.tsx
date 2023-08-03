type props = {
	isEditing: boolean;
	toggleEdit: () => void;
	className: string;
};

export function EditButton({ isEditing, className, toggleEdit }: props) {
	function onClick() {
		toggleEdit();
	}
	return (
		<>
			{isEditing ? (
				<button onClick={onClick} className={className}>
					💾
				</button>
			) : (
				<button onClick={onClick} className={className}>
					✏️
				</button>
			)}
		</>
	);
}
