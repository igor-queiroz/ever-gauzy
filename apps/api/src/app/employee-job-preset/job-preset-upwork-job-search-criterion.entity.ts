import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { JobPresetUpworkJobSearchCriterion as IJobPresetUpworkJobSearchCriterion } from '@gauzy/models';
import { TenantOrganizationBase } from '../core/entities/tenant-organization-base';
import { JobPreset } from './job-preset.entity';
import { JobSearchCategory } from './job-search-category/job-search-category.entity';
import { JobSearchOccupation } from './job-search-occupation/job-search-occupation.entity';

@Entity('job_preset_upwork_job_search_criterion')
export class JobPresetUpworkJobSearchCriterion
	extends TenantOrganizationBase
	implements IJobPresetUpworkJobSearchCriterion {
	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Column()
	jobPresetId?: string;

	@ManyToOne(() => JobPreset, (jobPreset) => jobPreset.jobPresetCriterions)
	jobPreset?: JobPreset;

	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Column({ nullable: true })
	jobSearchOccupationId?: string;

	@ManyToOne(
		() => JobSearchOccupation,
		(jobSearchOccupation) => jobSearchOccupation.jobPresetCriterions
	)
	jobSearchOccupation?: JobSearchOccupation;

	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Column({ nullable: true })
	jobSearchCategoryId?: string;

	@ManyToOne(
		() => JobSearchCategory,
		(jobSearchCategory) => jobSearchCategory.jobPresetCriterions
	)
	jobSearchCategory?: JobSearchCategory;

	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Column({ nullable: true })
	keyword?: string;

	@ApiProperty({ type: Boolean })
	@IsString()
	@IsNotEmpty()
	@Column({ default: false })
	hourly?: boolean;

	@ApiProperty({ type: Boolean })
	@IsString()
	@IsNotEmpty()
	@Column({ default: false })
	fixPrice?: boolean;
}
