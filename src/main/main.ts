import { parser } from '../parser/parser';
import { cloudStorageDownload } from '../retrieve/cloud-storage';
import { transform } from '../transform/transform';

export function testFun(): number {
    console.log('Im adding 2+2');
    return 2 + 2;
}

const testXML = `
<?xml version="1.0" encoding="utf-8"?>
	<CarPark>
		<CarParkRef>3</CarParkRef>
		<CarParkName>Nunnery Lane</CarParkName>
		<Location>York</Location>
		<Address>Nunnery Lane--York--North Yorkshire</Address>
		<Postcode>YO23 1AA</Postcode>
		<Notes>Open 24 hours. Park and pay by phone in this car park by calling 01904 279279. The location number for this car park is 7709. Blue badge holders can park free for as long as they want. CCTV &amp; toilets. Permit parking available.</Notes>
		<Telephone>01904551309</Telephone>
		<URL>http://www.york.gov.uk/transport/Parking/Car_parks/nunnery_ln/</URL>
		<MinCostPence>200</MinCostPence>
		<IsParkAndRide>false</IsParkAndRide>
		<StayType>Short</StayType>
		<PlanningPoint>true</PlanningPoint>
		<DateRecordLastUpdated>2014-06-17</DateRecordLastUpdated>
		<WEFDate>1900-01-01</WEFDate>
		<WEUDate>2099-12-31</WEUDate>
		<AccessPoints>
			<GeocodeType>Entrance</GeocodeType>
			<Easting>459904</Easting>
			<Northing>451314</Northing>
			<StreetName>NUNNERY LANE</StreetName>
			<BarrierInOperation>No</BarrierInOperation>
		</AccessPoints>
		<AccessPoints>
			<GeocodeType>Exit</GeocodeType>
			<Easting>459916</Easting>
			<Northing>451306</Northing>
			<StreetName>NUNNERY LANE</StreetName>
			<BarrierInOperation>No</BarrierInOperation>
		</AccessPoints>
		<AccessPoints>
			<GeocodeType>Map</GeocodeType>
			<Easting>459920</Easting>
			<Northing>451326</Northing>
			<StreetName/>
			<BarrierInOperation>Unk</BarrierInOperation>
		</AccessPoints>
		<CarParkOperator>
			<OperatorCode>32</OperatorCode>
			<OperatorName>York City Council</OperatorName>
			<OperatorURL>http://www.york.gov.uk/parking/index.html</OperatorURL>
			<OperatorTsAndCs/>
			<OperatorEmail>russ.broadbent@york.gov.uk</OperatorEmail>
		</CarParkOperator>
		<TrafficNewsRegion>
			<RegionName>Yorkshire and Humber</RegionName>
		</TrafficNewsRegion>
		<NPTGAdminDistrict>
			<AdminAreaCode>68</AdminAreaCode>
			<DistrictCode>310</DistrictCode>
		</NPTGAdminDistrict>
		<CarParkAdditionalData>
			<ClosingDate>1900-01-01</ClosingDate>
			<ReopeningDate>1900-01-01</ReopeningDate>
			<maxHeight>210</maxHeight>
			<PMSPA>Yes</PMSPA>
			<EmergencyNumber/>
			<CarParkEmail>parking@york.gov.uk</CarParkEmail>
			<CCTV>Yes</CCTV>
			<Staffed>Unk</Staffed>
			<Patrolled>Unk</Patrolled>
			<VehicleRestrictions/>
			<LiftsAvailable>Unk</LiftsAvailable>
			<ReservationsAvailable>Unk</ReservationsAvailable>
			<SeasonTicketsAvailable>Unk</SeasonTicketsAvailable>
			<NPTGLocality/>
			<CarParkType>
				<TypeCode>surface</TypeCode>
				<TypeDescription>Surface Car Park</TypeDescription>
			</CarParkType>
			<OpeningTimes>
				<Calendar>
					<CalendarStartDate>2010-01-01</CalendarStartDate>
					<CalendarEndDate>2010-12-31</CalendarEndDate>
					<Days>------S</Days>
					<PublicHolidays>Includes</PublicHolidays>
				</Calendar>
				<OpensAt>00:00:00</OpensAt>
				<LastEntranceAt>00:00:00</LastEntranceAt>
				<ClosesAt>00:00:00</ClosesAt>
			</OpeningTimes>
			<OpeningTimes>
				<Calendar>
					<CalendarStartDate>2010-01-01</CalendarStartDate>
					<CalendarEndDate>2010-12-31</CalendarEndDate>
					<Days>MTWTF--</Days>
					<PublicHolidays>Excludes</PublicHolidays>
				</Calendar>
				<OpensAt>00:00:00</OpensAt>
				<LastEntranceAt>00:00:00</LastEntranceAt>
				<ClosesAt>00:00:00</ClosesAt>
			</OpeningTimes>
			<OpeningTimes>
				<Calendar>
					<CalendarStartDate>2010-01-01</CalendarStartDate>
					<CalendarEndDate>2010-12-31</CalendarEndDate>
					<Days>-----S-</Days>
					<PublicHolidays>Includes</PublicHolidays>
				</Calendar>
				<OpensAt>00:00:00</OpensAt>
				<LastEntranceAt>00:00:00</LastEntranceAt>
				<ClosesAt>00:00:00</ClosesAt>
			</OpeningTimes>
			<OpeningTimes>
				<Calendar>
					<CalendarStartDate>2010-01-01</CalendarStartDate>
					<CalendarEndDate>2010-12-31</CalendarEndDate>
					<Days>MTWTFSS</Days>
					<PublicHolidays>Only</PublicHolidays>
				</Calendar>
				<OpensAt>00:00:00</OpensAt>
				<LastEntranceAt>00:00:00</LastEntranceAt>
				<ClosesAt>00:00:00</ClosesAt>
			</OpeningTimes>
			<Concessions>
				<ConcessionCode>10</ConcessionCode>
				<ConcessionDescription>Short car parking discount</ConcessionDescription>
			</Concessions>
			<Concessions>
				<ConcessionCode>11</ConcessionCode>
				<ConcessionDescription>Low emission vehicle discount</ConcessionDescription>
			</Concessions>
			<Concessions>
				<ConcessionCode>22</ConcessionCode>
				<ConcessionDescription>Annual Permit</ConcessionDescription>
			</Concessions>
			<Concessions>
				<ConcessionCode>7</ConcessionCode>
				<ConcessionDescription>Season Ticket</ConcessionDescription>
			</Concessions>
			<Concessions>
				<ConcessionCode>9</ConcessionCode>
				<ConcessionDescription>Evening Frequent user</ConcessionDescription>
			</Concessions>
			<PaymentType>
				<TypeCode>1</TypeCode>
				<TypeDescription>Pay and Display</TypeDescription>
			</PaymentType>
			<PaymentMethods>
				<Code>50</Code>
				<Description>Cash</Description>
				<ChangeAvailable>Unk</ChangeAvailable>
			</PaymentMethods>
			<Facilities>
				<FacilityName/>
				<FacilityLocation>Unknown</FacilityLocation>
				<FacilityTypeCode>3</FacilityTypeCode>
				<FacilityTypeDescription>Toilets</FacilityTypeDescription>
			</Facilities>
			<Facilities>
				<FacilityName/>
				<FacilityLocation>Unknown</FacilityLocation>
				<FacilityTypeCode>41</FacilityTypeCode>
				<FacilityTypeDescription>None Recorded</FacilityTypeDescription>
			</Facilities>
			<CarParkSpace>
				<NumberOfSpaces>193</NumberOfSpaces>
				<TypeCode>60</TypeCode>
				<TypeDescription>Standard</TypeDescription>
				<Charges>
					<StartTime>08:00:00</StartTime>
					<EndTime>18:00:00</EndTime>
					<TimeRangeDays>0</TimeRangeDays>
					<TimeRangeMinutes>60</TimeRangeMinutes>
					<Comments>Non resident rate</Comments>
					<ChargeAmount>200</ChargeAmount>
					<ChargeDayEndTime>24 hours</ChargeDayEndTime>
					<ChargeType>Time Based</ChargeType>
					<ChargeDescription>2</ChargeDescription>
					<Calendar>
						<CalendarStartDate>2010-01-01</CalendarStartDate>
						<CalendarEndDate>2010-12-31</CalendarEndDate>
						<Days>MTWTFSS</Days>
						<PublicHolidays>Includes</PublicHolidays>
					</Calendar>
				</Charges>
			</CarParkSpace>
			<CarParkSpace>
				<NumberOfSpaces>193</NumberOfSpaces>
				<TypeCode>60</TypeCode>
				<TypeDescription>Standard</TypeDescription>
				<Charges>
					<StartTime>08:00:00</StartTime>
					<EndTime>18:00:00</EndTime>
					<TimeRangeDays>0</TimeRangeDays>
					<TimeRangeMinutes>120</TimeRangeMinutes>
					<Comments>Non resident rate</Comments>
					<ChargeAmount>400</ChargeAmount>
					<ChargeDayEndTime>24 hours</ChargeDayEndTime>
					<ChargeType>Time Based</ChargeType>
					<ChargeDescription>2</ChargeDescription>
					<Calendar>
						<CalendarStartDate>2010-01-01</CalendarStartDate>
						<CalendarEndDate>2010-12-31</CalendarEndDate>
						<Days>MTWTFSS</Days>
						<PublicHolidays>Includes</PublicHolidays>
					</Calendar>
				</Charges>
			</CarParkSpace>
			<CarParkSpace>
				<NumberOfSpaces>193</NumberOfSpaces>
				<TypeCode>60</TypeCode>
				<TypeDescription>Standard</TypeDescription>
				<Charges>
					<StartTime>08:00:00</StartTime>
					<EndTime>18:00:00</EndTime>
					<TimeRangeDays>0</TimeRangeDays>
					<TimeRangeMinutes>180</TimeRangeMinutes>
					<Comments>Non resident rate</Comments>
					<ChargeAmount>600</ChargeAmount>
					<ChargeDayEndTime>24 hours</ChargeDayEndTime>
					<ChargeType>Time Based</ChargeType>
					<ChargeDescription>2</ChargeDescription>
					<Calendar>
						<CalendarStartDate>2010-01-01</CalendarStartDate>
						<CalendarEndDate>2010-12-31</CalendarEndDate>
						<Days>MTWTFSS</Days>
						<PublicHolidays>Includes</PublicHolidays>
					</Calendar>
				</Charges>
			</CarParkSpace>
			<CarParkSpace>
				<NumberOfSpaces>193</NumberOfSpaces>
				<TypeCode>60</TypeCode>
				<TypeDescription>Standard</TypeDescription>
				<Charges>
					<StartTime>08:00:00</StartTime>
					<EndTime>18:00:00</EndTime>
					<TimeRangeDays>0</TimeRangeDays>
					<TimeRangeMinutes>240</TimeRangeMinutes>
					<Comments>Non resident rate</Comments>
					<ChargeAmount>800</ChargeAmount>
					<ChargeDayEndTime>24 hours</ChargeDayEndTime>
					<ChargeType>Time Based</ChargeType>
					<ChargeDescription>2</ChargeDescription>
					<Calendar>
						<CalendarStartDate>2010-01-01</CalendarStartDate>
						<CalendarEndDate>2010-12-31</CalendarEndDate>
						<Days>MTWTFSS</Days>
						<PublicHolidays>Includes</PublicHolidays>
					</Calendar>
				</Charges>
			</CarParkSpace>
			<CarParkSpace>
				<NumberOfSpaces>193</NumberOfSpaces>
				<TypeCode>60</TypeCode>
				<TypeDescription>Standard</TypeDescription>
				<Charges>
					<StartTime>08:00:00</StartTime>
					<EndTime>18:00:00</EndTime>
					<TimeRangeDays>0</TimeRangeDays>
					<TimeRangeMinutes>300</TimeRangeMinutes>
					<Comments>Non resident rate</Comments>
					<ChargeAmount>1000</ChargeAmount>
					<ChargeDayEndTime>24 hours</ChargeDayEndTime>
					<ChargeType>Time Based</ChargeType>
					<ChargeDescription>2</ChargeDescription>
					<Calendar>
						<CalendarStartDate>2010-01-01</CalendarStartDate>
						<CalendarEndDate>2010-12-31</CalendarEndDate>
						<Days>MTWTFSS</Days>
						<PublicHolidays>Includes</PublicHolidays>
					</Calendar>
				</Charges>
			</CarParkSpace>
			<CarParkSpace>
				<NumberOfSpaces>193</NumberOfSpaces>
				<TypeCode>60</TypeCode>
				<TypeDescription>Standard</TypeDescription>
				<Charges>
					<StartTime>08:00:00</StartTime>
					<EndTime>00:00:00</EndTime>
					<TimeRangeDays>1</TimeRangeDays>
					<TimeRangeMinutes>0</TimeRangeMinutes>
					<Comments>Non resident rate</Comments>
					<ChargeAmount>1150</ChargeAmount>
					<ChargeDayEndTime>24 hours</ChargeDayEndTime>
					<ChargeType>Fixed</ChargeType>
					<ChargeDescription>1</ChargeDescription>
					<Calendar>
						<CalendarStartDate>2010-01-01</CalendarStartDate>
						<CalendarEndDate>2010-12-31</CalendarEndDate>
						<Days>MTWTFSS</Days>
						<PublicHolidays>Includes</PublicHolidays>
					</Calendar>
				</Charges>
			</CarParkSpace>
			<CarParkSpace>
				<NumberOfSpaces>193</NumberOfSpaces>
				<TypeCode>60</TypeCode>
				<TypeDescription>Standard</TypeDescription>
				<Charges>
					<StartTime>18:00:00</StartTime>
					<EndTime>08:00:00</EndTime>
					<TimeRangeDays>0</TimeRangeDays>
					<TimeRangeMinutes>0</TimeRangeMinutes>
					<Comments>After midnight parking free until 8am following day. Can park your until 8am the following morning providing the charge to take you to 6.00pm and the flat rate 6pm to 8am is paid. Non resident rate</Comments>
					<ChargeAmount>200</ChargeAmount>
					<ChargeDayEndTime>24 hours</ChargeDayEndTime>
					<ChargeType>Fixed</ChargeType>
					<ChargeDescription>1</ChargeDescription>
					<Calendar>
						<CalendarStartDate>2010-01-01</CalendarStartDate>
						<CalendarEndDate>2010-12-31</CalendarEndDate>
						<Days>MTWTFSS</Days>
						<PublicHolidays>Includes</PublicHolidays>
					</Calendar>
				</Charges>
			</CarParkSpace>
			<CarParkSpace>
				<NumberOfSpaces>4</NumberOfSpaces>
				<TypeCode>2</TypeCode>
				<TypeDescription>Disabled</TypeDescription>
				<Charges>
					<StartTime>08:00:00</StartTime>
					<EndTime>00:00:00</EndTime>
					<TimeRangeDays>1</TimeRangeDays>
					<TimeRangeMinutes>0</TimeRangeMinutes>
					<Comments/>
					<ChargeAmount>0</ChargeAmount>
					<ChargeDayEndTime>24 hours</ChargeDayEndTime>
					<ChargeType>Fixed</ChargeType>
					<ChargeDescription>1</ChargeDescription>
					<Calendar>
						<CalendarStartDate>2010-01-01</CalendarStartDate>
						<CalendarEndDate>2010-12-31</CalendarEndDate>
						<Days>MTWTFSS</Days>
						<PublicHolidays>Includes</PublicHolidays>
					</Calendar>
				</Charges>
			</CarParkSpace>
		</CarParkAdditionalData>
	</CarPark>`;

export async function main() {
    //const dl = await cloudStorageDownload('bluebird-parking-dev-data', 'source/CarParkData_1.xml');
    //const result = await parser(dl.toString());

    const parseResult = await parser(testXML);
    const result = await transform(parseResult.carparks);

    console.log(result);
    return result;
}
