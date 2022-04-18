--exercise 3


--select tr.Name as TrackName, tr.Composer,al.Name as 'Album Name',tr.Milliseconds,tr.Bytes,mt.Name AS 'MediaType Name',gn.Name as 'Genre Name'
--from Track tr join Albums al on tr.AlbumId=al.AlbumsId join MediaType mt on tr.MediaTypeId=mt.MediaTypeId
--join Genre gn on tr.GenreId=gn.GenreId


--select top 10 CONCAT(cr.FirstName,' ',cr.LastName),inv.InvoiceId,inv.InvoiceDate,inv.BillingCountry
--from Customer cr join invoice inv on cr.CustomerId =inv.CustomerId where inv.BillingCountry='Brazil'


--select top 8 CONCAT(cu.FirstName,' ',cu.LastName)as 'Sales Agent',inv.InvoiceId,cu.CustomerId,
--inv.InvoiceDate,inv.BillingAddress,inv.BillingCity,inv.BillingState,inv.BillingPostalCode,
--inv.Total from Customer cu join Invoice inv on cu.CustomerId=inv.CustomerId 

--select inv.InvoiceLineId,inv.InvoiceId,inv.TrackId,inv.UnitPrice,inv.Quantity,al.Title as Track,ar.Name as Artist
--from InvoiceLine inv join Track tr on inv.TrackId=tr.TrackId join Album al on al.AlbumId=tr.AlbumId
--join Artist ar on ar.ArtistId = al.ArtistId where tr.TrackId between 1 and 4


--select em.FirstName,em.LastName,cu.CustomerId,inv.InvoiceId,inv.InvoiceDate,inv.BillingAddress,inv.BillingCountry,inv.BillingPostalCode
--from Employee em join Customer cu on em.EmployeeId=cu.SupportRepId join Invoice inv on inv.CustomerId=cu.CustomerId 
--where inv.InvoiceDate between '2009-01-01 00:00:00.000' and '2009-04-15 00:00:00.000' and em.FirstName='jane'


--select cu.FirstName as Customer_name,inv.InvoiceDate as OrderDate from Customer cu join invoice inv 
--on cu.CustomerId=inv.CustomerId where inv.InvoiceDate between '2012-01-01 00:00:00.000' and '2012-03-11 00:00:00.000'

--select CONCAT(cu.FirstName,' ',cu.LastName) as 'Name',SUM(inv.Total) as Amount from customer cu join invoice inv on cu.CustomerId=inv.CustomerId
--group by cu.CustomerId,cu.FirstName,cu.LastName having SUM(inv.Total) between 36.62 and 37.62 order by SUM(inv.Total) asc 


--select em.EmployeeId,sum(inv.Total) as TotalSale
--from Employee em join Customer cu on em.EmployeeId=cu.SupportRepId join Invoice inv on inv.CustomerId=cu.CustomerId group by cu.SupportRepId,em.EmployeeId having em.EmployeeId in(3,4,5)