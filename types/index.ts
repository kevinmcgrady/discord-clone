import { Server, Member, Profile } from '@prisma/client';

export type ServerWithMemberAndProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
