import React, { useState } from 'react';
import "./tablePage.css"
import { FaSort } from 'react-icons/fa';
const VehicleLevelListTable = () => {
    
    const [data, setData] = useState([
        {
            "vehicle  Id": "KA1234",
            "no  Of  Trips": 456,
            "trip  Kms": 5443,
            "average  Trips  Per  Day": 4,
            "average  Kms  Per  Trip": 30,
            "average  Daily  Work  Hours": 6,
            "average  Charging  Time (Hrs)": 3.2,
            "co2  Emissions  Saved": 231,
            "vendor  Name": "Meenakshi Travels"
        },
        {
            "vehicle  Id": "KA1256",
            "no  Of  Trips": 2930,
            "trip  Kms": 10000,
            "average  Trips  Per  Day": 3.5,
            "average  Kms  Per  Trip": 37.2,
            "average  Daily  Work  Hours": 8.3,
            "average  Charging  Time (Hrs)": 16.5,
            "co2  Emissions  Saved": 2312,
            "vendor  Name": "8 Vendors"
        },
        {
            "vehicle  Id": "KA7890",
            "no  Of  Trips": 890,
            "trip  Kms": 7654,
            "average  Trips  Per  Day": 5,
            "average  Kms  Per  Trip": 23,
            "average  Daily  Work  Hours": 7,
            "average  Charging  Time (Hrs)": 4.2,
            "co2  Emissions  Saved": 321,
            "vendor  Name": "XYZ Travels"
        },
        {
            "vehicle  Id": "KA2468",
            "no  Of  Trips": 246,
            "trip  Kms": 9876,
            "average  Trips  Per  Day": 2,
            "average  Kms  Per  Trip": 40.2,
            "average  Daily  Work  Hours": 5,
            "average  Charging  Time (Hrs)": 6.5,
            "co2  Emissions  Saved": 543,
            "vendor  Name": "ABC Travels"
        },
        {
            "vehicle  Id": "KA1357",
            "no  Of  Trips": 1357,
            "trip  Kms": 8765,
            "average  Trips  Per  Day": 6,
            "average  Kms  Per  Trip": 28,
            "average  Daily  Work  Hours": 8,
            "average  Charging  Time (Hrs)": 5.7,
            "co2  Emissions  Saved": 432,
            "vendor  Name": "PQR Travels"
        },
        {
            "vehicle  Id": "KA3690",
            "no  Of  Trips": 369,
            "trip  Kms": 6543,
            "average  Trips  Per  Day": 3,
            "average  Kms  Per  Trip": 17.6,
            "average  Daily  Work  Hours": 6,
            "average  Charging  Time (Hrs)": 2.3,
            "co2  Emissions  Saved": 123,
            "vendor  Name": "LMN Travels"
        },
        {
            "vehicle  Id": "KA3579",
            "no  Of  Trips": 579,
            "trip  Kms": 4567,
            "average  Trips  Per  Day": 4.5,
            "average  Kms  Per  Trip": 28.3,
            "average  Daily  Work  Hours": 7.5,
            "average  Charging  Time (Hrs)": 3.8,
            "co2  Emissions  Saved": 654,
            "vendor  Name": "JKL Travels"
        },
        {
            "vehicle  Id": "KA8024",
            "no  Of  Trips": 802,
            "trip  Kms": 5432,
            "average  Trips  Per  Day": 5.5,
            "average  Kms  Per  Trip": 36,
            "average  Daily  Work  Hours": 8,
            "average  Charging  Time (Hrs)": 6.2,
            "co2  Emissions  Saved": 765,
            "vendor  Name": "RST Travels"
        },
        {
            "vehicle  Id": "KA5791",
            "no  Of  Trips": 791,
            "trip  Kms": 6789,
            "average  Trips  Per  Day": 6.5,
            "average  Kms  Per  Trip": 28.7,
            "average  Daily  Work  Hours": 7.8,
            "average  Charging  Time (Hrs)": 4.9,
            "co2  Emissions  Saved": 876,
            "vendor  Name": "UVW Travels"
        },
        {
            "vehicle  Id": "KA6789",
            "no  Of  Trips": 678,
            "trip  Kms": 7890,
            "average  Trips  Per  Day": 5.2,
            "average  Kms  Per  Trip": 32.1,
            "average  Daily  Work  Hours": 7.2,
            "average  Charging  Time (Hrs)": 5.1,
            "co2  Emissions  Saved": 987,
            "vendor  Name": "QRS Travels"
        },
        {
            "vehicle  Id": "KA1234",
            "no  Of  Trips": 456,
            "trip  Kms": 5443,
            "average  Trips  Per  Day": 4,
            "average  Kms  Per  Trip": 30,
            "average  Daily  Work  Hours": 6,
            "average  Charging  Time (Hrs)": 3.2,
            "co2  Emissions  Saved": 231,
            "vendor  Name": "Meenakshi Travels"
        },
        {
            "vehicle  Id": "KA1256",
            "no  Of  Trips": 2930,
            "trip  Kms": 10000,
            "average  Trips  Per  Day": 3.5,
            "average  Kms  Per  Trip": 37.2,
            "average  Daily  Work  Hours": 8.3,
            "average  Charging  Time (Hrs)": 16.5,
            "co2  Emissions  Saved": 2312,
            "vendor  Name": "8 Vendors"
        },
        {
            "vehicle  Id": "KA7890",
            "no  Of  Trips": 890,
            "trip  Kms": 7654,
            "average  Trips  Per  Day": 5,
            "average  Kms  Per  Trip": 23,
            "average  Daily  Work  Hours": 7,
            "average  Charging  Time (Hrs)": 4.2,
            "co2  Emissions  Saved": 321,
            "vendor  Name": "XYZ Travels"
        },
        {
            "vehicle  Id": "KA2468",
            "no  Of  Trips": 246,
            "trip  Kms": 9876,
            "average  Trips  Per  Day": 2,
            "average  Kms  Per  Trip": 40.2,
            "average  Daily  Work  Hours": 5,
            "average  Charging  Time (Hrs)": 6.5,
            "co2  Emissions  Saved": 543,
            "vendor  Name": "ABC Travels"
        },
        {
            "vehicle  Id": "KA1357",
            "no  Of  Trips": 1357,
            "trip  Kms": 8765,
            "average  Trips  Per  Day": 6,
            "average  Kms  Per  Trip": 28,
            "average  Daily  Work  Hours": 8,
            "average  Charging  Time (Hrs)": 5.7,
            "co2  Emissions  Saved": 432,
            "vendor  Name": "PQR Travels"
        },
        {
            "vehicle  Id": "KA3690",
            "no  Of  Trips": 369,
            "trip  Kms": 6543,
            "average  Trips  Per  Day": 3,
            "average  Kms  Per  Trip": 17.6,
            "average  Daily  Work  Hours": 6,
            "average  Charging  Time (Hrs)": 2.3,
            "co2  Emissions  Saved": 123,
            "vendor  Name": "LMN Travels"
        },
    ]
);
    const [sortBy, setSortBy] = useState({ column: null, direction: 'asc' });
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData,setFilteredData] = useState(data);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        if(event.target.value.trim(" ").length==0) { 
            setFilteredData(data);
            return;
        }
        const filtered = data.filter((row) => {
            return row['vehicle  Id'].toLowerCase().includes(searchTerm.toLowerCase()) ||
                row['vendor  Name'].toLowerCase().includes(searchTerm.toLowerCase());
        })
        if(filtered.length==0) {   
            setFilteredData([{
                "vehicle  Id": "KA3690",
                "no  Of  Trips": 369,
                "trip  Kms": 6543,
                "average  Trips  Per  Day": 3,
                "average  Kms  Per  Trip": 17.6,
                "average  Daily  Work  Hours": 6,
                "average  Charging  Time (Hrs)": 2.3,
                "co2  Emissions  Saved": 123,
                "vendor  Name": "LMN Travels"
            },]);
        }
        setFilteredData(filtered);
    };
    
    const sortData = (column) => {
        const direction = sortBy.column === column ? (sortBy.direction === 'asc' ? 'desc' : 'asc') : 'asc';
        setSortBy({ column, direction });
        setFilteredData([...filteredData].sort((a, b) => {
            if (column === 'vehicle  Id' || column === 'vendor  Name') {
                return direction === 'asc' ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column]);
            } else {
                return direction === 'asc' ? a[column] - b[column] : b[column] - a[column];
            }
        }));
    };

    return (
        <div>
            <input
                type="text"
                className='mb-5 ipt appearance-none block bg-gray-200 text-gray-700 border rounded-full border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                placeholder="Search by vehicle ID or vendor name"
                value={searchTerm}
                onChange={handleSearch}
            />
            {filteredData.length>0 ?
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" >
            <thead className='text-xs  uppercase '>
                <tr>
                    {Object.keys(data[0]).map((column) => (
                        <th className="text-xs text-white uppercase" key={column} onClick={() => sortData(column)}>
                            <div className='flex items-center gap-1'>{column} {<FaSort />}</div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredData.map((row) => (
                    <tr key={row.vehicleId || row.someUniqueIdentifier}> 
                        {Object.values(row).map((value) => (
                            <td className='text-white' key={value}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
                <tfoot style={{verticalAlign:"bottom"}}>
                    <tr className='foot text-white'>
                        <td>10,000</td>
                        <td>450</td>
                        <td>1684007</td>
                        <td>11</td>
                        <td>74</td>
                        <td>8</td>
                        <td>8</td>
                        <td>780</td>
                        <td>5 Vendors</td>
                    </tr>
                </tfoot>
        </table>:<div className='text-white ml-3 text-xl mb-5 '>No data found</div>
}
        </div>
    );
};

export default VehicleLevelListTable;
