import { StaffMember } from '@/lib/data';

interface StaffMemberCardProps {
	member: StaffMember;
}

const StaffCard = ({ member }: StaffMemberCardProps) => {
	return (
		<div className="flex items-center gap-4">
			<img src={member.image} alt={member.name} className="h-16 w-16 rounded-full object-cover" />
			<div>
				<h2 className="text-lg font-semibold">{member.name}</h2>
				<p className="text-sm text-gray-500">@{member.username}</p>
				<p className="text-sm">{member.roles.join(', ')}</p>
			</div>
		</div>
	);
};

export default StaffCard;
