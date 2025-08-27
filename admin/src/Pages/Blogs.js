import React from 'react';
import './Category.css';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import TextField from '@mui/material/TextField';

const headCells = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Title' },
    { id: 'slug', label: 'Slug' },
    { id: 'feature_image', label: 'Banner' },        // maps to feature_image from API
    { id: 'status', label: 'Status' },
    { id: 'updated', label: 'Updated' },      // maps to updated_at
    { id: 'updated_by', label: 'Updated By' },
    { id: 'action', label: 'Action' },
]
function getSortValue(row, key) {
    switch (key) {
        case 'feature_image': return row.feature_image || '';
        case 'updated': return row.updated_at || '';
        default: return row[key] ?? '';
    }
}
function descendingComparator(a, b, orderBy) {
    const A = getSortValue(a, orderBy);
    const B = getSortValue(b, orderBy);

    // Try date compare if these look like dates
    const aTime = Date.parse(A);
    const bTime = Date.parse(B);
    if (!isNaN(aTime) && !isNaN(bTime)) {
        if (bTime < aTime) return -1;
        if (bTime > aTime) return 1;
        return 0;
    }
    // Fallback string/number compare
    if (B < A) return -1;
    if (B > A) return 1;
    return 0;
}
function getComparator(order, orderBy) {
    return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
// ---- Table Head (kept with sorting + select all) ----
function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
            <TableCell padding="checkbox">
                <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{ 'aria-label': 'select all rows' }}
                />
            </TableCell>

            {headCells.map((headCell) => (
                <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                {headCell.id !== 'action' ? (
                    <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                    >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                    ) : null}
                    </TableSortLabel>
                ) : (
                headCell.label
                )}
                </TableCell>
            ))}
            </TableRow>
        </TableHead>
    );
}
// ---- Toolbar (kept) ----
function EnhancedTableToolbar({ numSelected }) {
    return (
        <Toolbar
        sx={[
            { pl: { sm: 2 }, pr: { xs: 1, sm: 1 } },
            numSelected > 0 && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            },
        ]}
        >
        {numSelected > 0 ? (
            <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
            </Typography>
        ) : (
            <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
            Blogs
            </Typography>
        )}
        {numSelected > 0 ? (
            <Tooltip title="Delete">
            <IconButton>
                <DeleteIcon />
            </IconButton>
            </Tooltip>
        ) : (
            <Tooltip title="Filter list">
            <IconButton>
                <FilterListIcon />
            </IconButton>
            </Tooltip>
        )}
        </Toolbar>
    );
}

const Blogs = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [rows, setRows] = React.useState([]);   // holds data from API
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Fetch from your API and keep your heading intact
    React.useEffect(() => {
        fetch('http://localhost:3000/blogs/')
        .then((res) => res.json())
        .then((data) => {
        // data expected to be array of categories
        setRows(Array.isArray(data) ? data : []);
    
        })
        .catch((err) => {
        console.error('Error fetching categories:', err);
        setRows([]);
        });
    }, []);
    const filteredRows = React.useMemo(() => {
        if (!searchQuery) return rows;
        const lowerQuery = searchQuery.toLowerCase();
        return rows.filter(
        (row) =>
        (row.name && row.name.toLowerCase().includes(lowerQuery)) ||
        (row.slug && row.slug.toLowerCase().includes(lowerQuery))
        );
    }, [rows, searchQuery]);
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
        const allIds = rows.map((n) => Number(n.id));
        setSelected(allIds);
        return;
        }
        setSelected([]);
    };
    const handleClick = (event, id) => {
        const rowId = Number(id);
        const selectedIndex = selected.indexOf(rowId);
        let newSelected = [];

        if (selectedIndex === -1) newSelected = newSelected.concat(selected, rowId);
        else if (selectedIndex === 0) newSelected = newSelected.concat(selected.slice(1));
        else if (selectedIndex === selected.length - 1) newSelected = newSelected.concat(selected.slice(0, -1));
        else if (selectedIndex > 0) newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => setDense(event.target.checked);

    // Sorted + paginated rows
    const sortedRows = React.useMemo(
        () => [...filteredRows].sort(getComparator(order, orderBy)),
        [filteredRows, order, orderBy]
    );

    const paginatedRows = React.useMemo(
        () => sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [sortedRows, page, rowsPerPage]
    );

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;



  return (
    <div>
        <h2>ALL BLOGS</h2>
        <div className="catergories_main">
            <div>
                <TextField
                id="outlined-search-input"
                label="Search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
                />
            </div>
            <Button variant="contained">Add Blog</Button>
        </div>
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />

                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {paginatedRows.map((row, index) => {
                            const rowId = Number(row.id);
                            const isItemSelected = selected.includes(rowId);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                hover
                                onClick={(event) => handleClick(event, rowId)}
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                key={rowId}
                                selected={isItemSelected}
                                sx={{ cursor: 'pointer' }}
                                >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                    color="primary"
                                    checked={isItemSelected}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </TableCell>

                                {/* Cells in the exact order of your headers */}
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.slug}</TableCell>
                                <TableCell>
                                    {row.feature_image ? (
                                    <img
                                        // src={row.feature_image}
                                        src="https://www.cppboxes.com/media/products/Custom_Anklet_Boxes_0000_51.jpg"
                                        alt={row.alt || row.name || 'banner'}
                                        style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }}
                                    />
                                    ) : (
                                    'N/A'
                                    )}
                                </TableCell>
                                <TableCell>{row.status==1 ? "active" : "inactive"}</TableCell>
                                <TableCell>{row.updated_at || '—'}</TableCell>
                                <TableCell>{row.updatedUser.full_name || '—'}</TableCell>
                                <TableCell>
                                    {/* Placeholder actions (keep functionality later) */}
                                    <Button size="small">Edit</Button>
                                </TableCell>
                            </TableRow>
                        );
                        })}

                        {emptyRows > 0 && (
                        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                            <TableCell colSpan={9} />
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>

            <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" />
        </Box>
    </div>
  )
}

export default Blogs